<?php

  namespace SocialStreams;

  class Bootstrap
  {

    /**
     * Store a 'loaded' flag, in case we are generating this class more than once.
     */
    static private $loaded = false;

    /**
     * @var (string) Plugin path
     */
    static public $path;

    /**
    * @var (string) Plugin version
    */
    static public $version;


    /**
     * Bootstrap App
     *
     * @author Alessandro Biavati <ale@briteweb.com>
     * @package briteweb/package
     * @since 0.0.0
     */

    public function __construct( $path, $version )
    {

      // check if we already loaded the app before.
      if ( static::$loaded )
        return;

      // set loaded flag to true so we don't load the app twice
      static::$loaded = true;

      // set plugin path and version passed to the constructor
      static::$path = $path;
      static::$version = $version;

      // Instantiate app classes
      new Setup();
      new Updates();
      new Admin();
      new Enqueue();
      new OAuth();
      new JsonAPI();
      new Cron();
      new PageTemplate();

      // Initialize SS API module
      new JsonAPI\Bootstrap( $path, $version );

      // define WP-CLI commands
      if ( defined('WP_CLI') && WP_CLI )
        \WP_CLI::add_command( 'socialstreams', 'SocialStreams\\WpCliCommand' );


    } /* __construct() */

  }/* class Bootstrap */
