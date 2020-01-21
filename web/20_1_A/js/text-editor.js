const KEY_FILE = "KEY_FILE"

let idleTime = null

let fileEditor = [
  {
    title: "index",
    content: ""
  }
]

function listFileItem(filename) {
  if(filename.includes('.html'))
      filename = filename.substring(0 , filename.indexOf('.html'))

  return `<a class="list-group-item list-group-file-item">
  <img src="./assets/html5.png" class="logo" alt="" style="width: 16px;height: 16px;">
  <span class="ml-1 text-truncate">${filename}.html</span>
</a>`
}

function explorerItem(filename) {
  return ` <div class="explorer-items">
        <img src="./assets/html5.png" class="logo" alt="">
        <span class="ml-1 text-truncate">${filename}.html</span>
      </div>
`
}

function editorTabItems(filename) {
  return ` <div class="editor-tab-items">
        <span class='editor-tab-item-name text-truncate'>${filename}.html</span>
        <i class="fa fa-times close-editor-tab-items" aria-hidden="true"></i>
      </div>`
}

let uploadFiles = []

$("#openFileForm").submit(function (event) {
  event.preventDefault()
  fileEditor = [...fileEditor, ...uploadFiles]
  uploadFiles.forEach(upload => {
    addEditorTabItemToUI(upload.title)
    addExplorerItemToUI(upload.title)
  })

  saveFile()

  $("#modalOpenFile").modal('toggle')
})

$("#uploadFile").change(function (event) {
  const files = event.target.files

  uploadFiles = []

  Object.keys(files)
    .forEach(idx => {
      var fr = new FileReader();
      const {name} = files[idx]

      fr.onload = function () {
        uploadFiles.push({
          title : name, 
          content : this.result
        })  
      };

      addFileItemToListUI(name)
      fr.readAsText(files[idx]);
    });


})

$(document).ready(function () {
  if (localStorage.getItem(KEY_FILE)) {
    const fileEditors = JSON.parse(localStorage.getItem(KEY_FILE))
    fileEditor = fileEditors
  }

  fileEditor.forEach(file => {
    addEditorTabItemToUI(file.title)
    addExplorerItemToUI(file.title)
  })

  $(".explorer-items:first-child").addClass('active')
  $(".editor-tab-items:first-child").addClass('active')
  loadCodeFromFile()

})

$(".editor-tab-add").click(function () {

  $("#modalCreateFile").modal('toggle')
  $("#filename_txt").val("")

})

let idxActiveTab = 0

//editor tab trigger on click
$(document).on('click', '.editor-tab-items .editor-tab-item-name', function () {
  const parent = $(this).parent()

  $('.editor-tab-items').removeClass('active')
  idxActiveTab = $('.editor-tab-items').index(parent)

  $(".explorer-items").removeClass('active')
  $(".explorer-items").eq(idxActiveTab).addClass('active')

  parent.addClass('active')

  loadCodeFromFile()
})

$(document).on('click', '.editor-tab-items .close-editor-tab-items', function () {
  const parent = $(this).parent()
  parent.toggle()

  if (idxActiveTab === $('.editor-tab-items').index(parent)) {

    if (idxActiveTab + 1 < fileEditor.length) {
      idxActiveTab++;
      $(".explorer-items").removeClass('active')
      $(".explorer-items").eq(idxActiveTab).addClass('active')

      $('.editor-tab-items').removeClass('active')
      $('.editor-tab-items').eq(idxActiveTab).addClass('active')

      loadCodeFromFile()
    }
    else {
      $(".code").text('')
      $('.code').trigger('change')
    }
  }

})

$(document).on('click', ".explorer-items", function () {
  idxActiveTab = $(".explorer-items").index($(this))

  $(".editor-tab-items").removeClass('active')
  $(".editor-tab-items").eq(idxActiveTab).show().addClass('active')

  $(".explorer-items").removeClass('active')
  $(this).addClass('active')

  loadCodeFromFile()
})

$(document).on('click', '.list-group-file-item', function () {
  idxActiveTab = $('.list-group-file-item').index($(this))

  $(".editor-tab-items").removeClass('active')
  $(".editor-tab-items").eq(idxActiveTab).addClass('active')

  $(".explorer-items").removeClass('active')
  $('.explorer-items').eq(idxActiveTab).addClass('active')


  loadCodeFromFile()

  $("#modalOpenFile").modal('toggle')
})


document.querySelector(".editor").addEventListener("input", function (event) {
  const html = $(".code").text()
  if (idleTime) clearTimeout(idleTime)

  idleTime = setTimeout(() => {
    $(".html-preview").html($.parseHTML(html))
    updateFile(html)
  }, 300)
}, false);

$('.code').on('change', function () {
  const html = $(".code").text()
  $(".html-preview").html($.parseHTML(html))
})

$(".btn-fulllscreen").click(function () {
  $(".html-preview").toggleClass("fullscreen")
})



$("#form-save-file").submit(function (event) {
  event.preventDefault()
  let filename = $("#filename_txt").val()
  if (filename.includes(".html"))
    filename = filename.substring(0, filename.indexOf(".html"))

  addEditorTabItemToUI(filename)
  addExplorerItemToUI(filename)

  addFile(filename)

  $("#modalCreateFile").modal('toggle')
})

$("#save-current-file-local").click(function () {
  saveFileToLocal(fileEditor[idxActiveTab].content, fileEditor[idxActiveTab].title)
})

function loadCodeFromFile() {
  $(".code").text(fileEditor[idxActiveTab].content)
  $('.code').trigger('change')
}

function addExplorerItemToUI(filename) {
  if(filename.includes('.html'))
    filename = filename.substring(0 , filename.indexOf('.html'))

  $(".explorer-content").append(explorerItem(filename))
}

function addEditorTabItemToUI(filename) {
  if(filename.includes('.html'))
    filename = filename.substring(0 , filename.indexOf('.html'))
  $('.editor-tab-container').append(editorTabItems(filename))
}

function addFileItemToListUI(filename) {
  if(filename.includes('.html'))
    filename = filename.substring(0 , filename.indexOf('.html'))
  $("#list-group-open-file").append(listFileItem(filename))
}

function updateFile(content) {
  let newFileEditor = [...fileEditor]
  newFileEditor[idxActiveTab] = {
    ...newFileEditor[idxActiveTab],
    content: content
  }
  fileEditor = newFileEditor
  saveFile()
}

function addFile(filename) {
  fileEditor = [...fileEditor, {
    title: filename,
    content: ""
  }]

  saveFile()
}

function saveFile() {
  localStorage.setItem(KEY_FILE, JSON.stringify(fileEditor))
}

function saveFileToLocal(data, filename, type = "text/html") {
  var file = new Blob([data], { type: type });
  var link = document.createElement("a"),
    url = URL.createObjectURL(file);
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  setTimeout(function () {
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, 0);
}