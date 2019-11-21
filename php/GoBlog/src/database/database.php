<?

namespace Database;

require_once '../../vendor/autoload.php';

use App\Config\Config;

class Database
{
    private $servername = "";
    private $username = "root";
    private $password = "";
    private $conn = null;
    private $database = "";

    public function __construct()
    {
        $config = Config::all();
        
        $this->servername = $config["servername"];
        $this->username = $config["username"];
        $this->password = $config["password"];
        $this->database = $config["database"];

        // Create connection
        $this->conn = new mysqli($this->servername, $this->username, $this->password);
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }

        $sql = `
            DROP DATABASE IF EXISTS $this->database
            CREATE DATABASE $this->database
        `;
        execQuery($sql);
        echo $this->username;
    }

    public function execQuery($query) {
        if ($this->conn->query($query) === TRUE) {
            # code...
            
        } else {
            # code...
        }

        $this->conn->close();
    }
    
}
