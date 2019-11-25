<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7d740fffb18b76a60629c3cc9a59d53a
{
    public static $prefixLengthsPsr4 = array (
        'U' => 
        array (
            'Util\\' => 5,
        ),
        'S' => 
        array (
            'Socket\\' => 7,
        ),
        'F' => 
        array (
            'Faker\\' => 6,
        ),
        'D' => 
        array (
            'Database\\' => 9,
        ),
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Util\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/utils',
        ),
        'Socket\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/socket',
        ),
        'Faker\\' => 
        array (
            0 => __DIR__ . '/..' . '/fzaninotto/faker/src/Faker',
        ),
        'Database\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/database',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/app',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7d740fffb18b76a60629c3cc9a59d53a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7d740fffb18b76a60629c3cc9a59d53a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
