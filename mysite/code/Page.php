<?php
class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

}
class Page_Controller extends ContentController {

	/**
	 * An array of actions that can be accessed via a request. Each array element should be an action name, and the
	 * permissions or conditions required to allow the user to access it.
	 *
	 * <code>
	 * array (
	 *     'action', // anyone can access this action
	 *     'action' => true, // same as above
	 *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
	 *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
	 * );
	 * </code>
	 *
	 * @var array
	 */
	private static $allowed_actions = array (
	    'allTales',
        'TaleByID',
        'TaleImageByID'
	);

	public function init() {
		parent::init();
        Requirements::clear();
        $themeFolder = $this->ThemeDir();

        // Set the folder to our theme so that relative image paths work
        Requirements::set_combined_files_folder($themeFolder . '/combinedfiles');

        // Add all our css files to combine into an array
        $CSSFiles = array(
            $themeFolder . '/css/main.css'
        );

        Requirements::javascript('https://unpkg.com/vue');
        Requirements::javascript('https://unpkg.com/axios/dist/axios.min.js');

        // Add all our files to combine into an array
        $JSFiles = array(
            $themeFolder . '/js/jquery.min.js',
            $themeFolder . '/js/bootstrap.min.js',
            $themeFolder . '/js/scripts/all.js'
        );
        // Combine css files
        Requirements::combine_files('styles.css', $CSSFiles);

        // Combine js files
        Requirements::combine_files('scripts.js', $JSFiles);
	}
    
    public function getTales()
    {
        return $tales = Tale::get();
    }
    

	public function allTales()
    {
        $f = new JSONDataFormatter();

        return $f->convertDataObjectSet($tales = Tale::get());
    }

    /*
    public function TaleByID(SS_HTTPRequest $request)
    {
        $vars = json_decode($request->getBody());

        $f = new JSONDataFormatter();

        $tale = Tale::get()->byID($vars->taleID);

        $taleImage = Image::get()->byID($tale->CoverImageID);
        $tale->ImageURL = $taleImage->Filename;

        $object = new stdClass();
        $object->ID = $tale->ID;
        $object->Title = $tale->Title;
        $object->Content = $tale->Content;
        $object->ImageURL = $taleImage->Filename;

        $encode = $f->convertDataObject($object);
        error_log(var_export($encode, true));

        return $encode;
    }
    */
    public function TaleByID(SS_HTTPRequest $request)
    {
        error_log(var_export($request, true));
        $vars = json_decode($request->getBody());

        $tale = Tale::get()->byID($vars->taleID);
        $object = new stdClass();

        $object->ID = $tale->ID;
        $object->Title = $tale->Title;
        $object->Content = $tale->Content;
        $object->ImageURL = $tale->CoverImage()->Filename;

        $encode = json_encode($object);
        error_log(var_export($encode, true));

        return $encode;
    }

    public function getTimmySVGIcon()
    {
        $theme = $this->ThemeDir();
        return file_get_contents('../' . $theme . '/images/svg/timmy.svg');
    }

    public function getCloseIcon()
    {
        $theme = $this->ThemeDir();
        return file_get_contents('../' . $theme . '/images/svg/close.svg');
    }

}
