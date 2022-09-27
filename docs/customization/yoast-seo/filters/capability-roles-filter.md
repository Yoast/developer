---
id: capability-roles-filter
title: Yoast SEO - Altering Yoast SEO capabilities for roles
sidebar_label: Altering Yoast SEO capabilities for roles
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/filters/capability-roles-filter.md
---
Yoast SEO ships with a variety of custom capabilities that are assigned to various roles, which allow for granular control over what features are available for a particular role. However, in some cases you might want to expand or limit these capabilities. To support this, we’ve introduced a filter named `{$capability}_roles`, where `{$capability}` needs to be replaced with the name of one of the capabilities	that is registered by Yoast SEO.

## Usage
### Adding roles

The example below shows how you can use the filters to add one or multiple roles to a specific capability.
```php
<?php

/**
 * Adds the editor and wpseo_editor roles to the view_site_health_checks capability.
 * 
 * @param array $roles The currently allowed roles.
 *
 * @return array The allowed roles.
 */
function add_site_health_roles( $roles ) {
	return array_merge( $roles, [ 'editor', 'wpseo_editor' ] );
}

add_filter( 'view_site_health_checks_roles', 'add_site_health_roles' );
```

### Removing roles

The example below shows how you can use the filters to remove roles from a specific capability.
```php
<?php

/**
 * Removes the wpseo_editor role from the view_site_health_checks_roles capability.
 * 
 * @param array $roles The currently allowed roles.
 *
 * @return array The allowed roles.
 */
function remove_site_health_roles( $roles ) {
	return array_filter( $roles, function( $role ) {
		if ( $role !== 'wpseo_editor' ) {
			return $role;
		}
  } );
}

add_filter( 'view_site_health_checks_roles', 'remove_site_health_roles' );
```

## Applicable capabilities
Currently, the following capabilities are registered and can be altered with the filter:

* `wpseo_bulk_edit` -  Not yet implemented. Allows users to access the bulk editing feature in SEO -> Tools.
* `wpseo_edit_advanced_metadata` - Allows users to edit advanced metadata in the Advanced tab of the Yoast SEO metabox. Please note: If you want to fully disable this for a user that also has the `wpseo_manage_options` capability, you will have to also remove this capability for said user.
* `wpseo_manage_options` - Allows users to access the Yoast SEO settings pages. Please note: This does not work for administrators.
* `view_site_health_checks` - Allows users to access the Site Health Checks that are present in WordPress.


