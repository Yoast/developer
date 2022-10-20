---
id: changing-enhanced-slack-sharing
title: "Yoast SEO: Change the Enhanced Slack sharing output"
image: https://yoast.com/shared-assets/opengraph/?title=Yoast%20SEO:NEWLINEChange%20the%20EnhancedNEWLINESlack%20sharing%20output
sidebar_label: Enhanced Slack sharing
---

As of Yoast SEO 15.2 we've added the option to enhance the way URLs are displayed when they're shared on Slack. For more info on that feature, 
please see the help page: [enhanced Slack sharing](https://yoast.com/help/enhanced-slack-sharing/).

The data shown is a set of two labels with attached data, which will be output as string. You can filter this data by simply filtering the array through the `wpseo_enhanced_slack_data` filter.

For example:

```php
class Yoast_SEO_Enhance_Slack_Data {

	/**
	 * Class constructor
	 */
	public function __construct() {
		add_filter( 'wpseo_enhanced_slack_data', [ $this, 'generate_slack_data' ], 10, 2 );
	}

	/**
	 * Change Enhanced Slack sharing data labels.
	 *
	 * @param array                  $data         The Slack labels + data.
	 * @param Indexable_Presentation $presentation The indexable presentation object.
	 *
	 * @return array The Slack labels + data.
	 */
	public function generate_slack_data( array $data, Indexable_Presentation $presentation ) {
		if ( is_singular( 'jobs' ) ) {
			$hours    = get_post_meta( $presentation->model->object_id, 'jobs_hours', true );
			$location = get_post_meta( $presentation->model->object_id, 'jobs_location', true );
			$data = [
				'Location' => $location,
				'Hours'    => $hours,
			];
		}

		return $data;
	}
}
```
