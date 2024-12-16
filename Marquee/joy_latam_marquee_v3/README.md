# Drupal Block Module Configuration

# Step 1

* Mantain same nomenclature for the Drupal Block Module in the folder name and 
    all the files needed example joy_latam_[ModuleName]_v[VersionNumber]

## Step 2

* Validate the configuration of the info.yml this is the information of the Block Module that Drupal'll read:
    * joy_latam_[ModuleName]_v[VersionNumber].info.yml
        *   name: '[Your Name]'
            type: module
            description: '[Your Description]'
            core_version_requirement: ^10 || ^9
            package: Custom
            dependencies:
            - drupal:block
## Step 3

* Modify the information needed and the routes to the generated static files from the React Project 

    * joy_latam_[ModuleName]_v[VersionNumber].libraries.yml
        * joy_latam_[ModuleName]_v[VersionNumber]:
            version: 1.x
            js:
                static/js/[YourCompiledJSFileName].js: {}
            css:
                theme:
                static/css/[YourCompiledCSSFileName].css: {}
            dependencies:
                - core/jquery
## Step 4

* Modify the information of the PHP library that Drupal will read, the build section will create a div element in which the js and css files will apply it functionalities.

    *  /src/Plugin/Block/JoyLatam[ModuleName]V[VersionNumber]
        * Modify namespace
            * namespace Drupal\joy_latam_[ModuleName]_v[VersionNumber]\Plugin\Block;
        * Modify classname
            * class JoyLatam[ModuleName]V[VersionNumber] extends BlockBase
        * Modify Build instructions
            *  $build = [
                    '#markup' => '<div id="joy_latam_[ModuleName]_v[VersionNumber]">This is the main div that`ll show the component</div>',
                    '#attached' => [
                        'library' => [ 
                        '[FolderName]/[LibraryName]',
                        ],
                    ],
                ]; 
