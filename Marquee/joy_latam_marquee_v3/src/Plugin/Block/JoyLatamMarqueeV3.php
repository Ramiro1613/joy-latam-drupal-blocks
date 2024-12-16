<?php

namespace Drupal\joy_latam_marquee_v3\Plugin\Block;

use Drupal\Core\Block\BlockBase;

class JoyLatamMarqueeV3 extends BlockBase
{

  /**
   * {@inheritdoc}
   */
  public function build()
  {
    $build = [
      '#markup' => '<div id="joy_latam_marquee">This is the main div that`ll show the component</div>',
      '#attached' => [
        'library' => [
          'joy_latam_marquee_v3/joy_latam_marquee_v3',
        ],
      ],
    ];
    return $build;
  }
}
