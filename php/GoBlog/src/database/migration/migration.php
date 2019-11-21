<?php 
namespace Database\Migration;

class Migration implements Migrater {

    public function run()
    {
        $migrations = [
            new TablePostMigration
        ];
        
        foreach ($migrations as $migration) {
            # code...
            $migration->run();
        }
    }

}