<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 5/05/17
 * Time: 2:26 PM
 */
class Tale extends DataObject
{
    private static $db = array(
        'Title' =>  'Text',
        'Content'   =>  'HTMLText'
    );

    private static $has_one = array(
        'CoverImage'    =>  'Image'
    );

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $title = TextField::create('Title', 'Tale Title');

        $fields->addFieldsToTab('Root.Main', array(
            $title
        ));

        return $fields;
    }

}
