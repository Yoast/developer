---
id: changing-og-locale-output
title: OpenGraph Tags - Changing the og:locale output
sidebar_label: Changing the og:locale output
custom_edit_url: https://github.com/Yoast/developer-docs/edit/master/docs/customization/yoast-seo/changing-og-locale-output.md
---

When you enable OpenGraph settings in Yoast SEO, it'll output an `og:locale` meta tag. This `og:locale` is based on the language settings for your WordPress install.

So, if you want it to output `nl_NL` instead of the default `en_US`, you simply switch your WordPress installs' language to `nl_NL`. You can read [how to do that on the WordPress codex](http://codex.wordpress.org/WordPress_in_Your_Language).

## Change the `og:locale` tag
If you don't want to change the language of your WordPress install but _do_ want to change the locale output of Yoast SEO, you can do so by filtering the output. You should add code that looks like this to your theme's `functions.php`:

```php
/**
 * Changes the locale output.
 * 
 * @param string $locale The current locale.
 * 
 * @return string The locale.
 */
function yst_wpseo_change_og_locale( $locale ) {
    return 'nl_NL';
}

add_filter( 'wpseo_locale', 'yst_wpseo_change_og_locale' );
```

## Remove the `og:locale` tag
If you would like to remove the `og:locale` you will need to unhook `WPSEO_OpenGraph->locale()` from `wpseo_opengraph` by adding the code below to your theme's `functions.php` file.

This code snippet works in most cases, however, it does not work if you are using PHP 5.2 on your server. For the health and safety of your site, we recommend creating a backup of your site and database prior to any code changes, as we are unable to guarantee exactly what would happen on your specific site.

```php
add_action( 'template_redirect', function () {
    global $wpseo_og;

    if ( isset( $wpseo_og ) ) {
        remove_action( 'wpseo_opengraph', [ $wpseo_og, 'locale' ], 1 );
    }
}, 1000 );
```

## Valid `og:locale` choices
OpenGraph has a [limited list of supported `og:locale` designations](https://developers.facebook.com/docs/internationalization#locales). If your locale is not in this list, our plugin will output the best match for your language.

As of July 2018, the following are [valid `og:locale` choices](https://developers.facebook.com/docs/reference/opengraph/object-type/article/):

`en_us`, `ca_es`, `cs_cz`, `cx_ph`, `cy_gb`, `da_dk`, `de_de`, `eu_es`, `en_pi`, `en_ud`, `ck_us`, `es_la`, `es_es`, `es_mx`, `gn_py`, `fi_fi`, `fr_fr`, `gl_es`, `ht_ht`, `hu_hu`, `it_it`, `ja_jp`, `ko_kr`, `nb_no`, `nn_no`, `nl_nl`, `fy_nl`, `pl_pl`, `pt_br`, `pt_pt`, `ro_ro`, `ru_ru`, `sk_sk`, `sl_si`, `sv_se`, `th_th`, `tr_tr`, `ku_tr`, `zh_cn`, `zh_hk`, `zh_tw`, `fb_lt`, `af_za`, `sq_al`, `hy_am`, `az_az`, `be_by`, `bn_in`, `bs_ba`, `bg_bg`, `hr_hr`, `nl_be`, `en_gb`, `eo_eo`, `et_ee`, `fo_fo`, `fr_ca`, `ka_ge`, `el_gr`, `gu_in`, `hi_in`, `is_is`, `id_id`, `ga_ie`, `jv_id`, `kn_in`, `kk_kz`, `ky_kg`, `la_va`, `lv_lv`, `li_nl`, `lt_lt`, `mi_nz`, `mk_mk`, `mg_mg`, `ms_my`, `mt_mt`, `mr_in`, `mn_mn`, `ne_np`, `pa_in`, `rm_ch`, `sa_in`, `sr_rs`, `so_so`, `sw_ke`, `tl_ph`, `ta_in`, `tt_ru`, `te_in`, `ml_in`, `uk_ua`, `uz_uz`, `vi_vn`, `xh_za`, `zu_za`, `km_kh`, `tg_tj`, `ar_ar`, `he_il`, `ur_pk`, `fa_ir`, `sy_sy`, `yi_de`, `qc_gt`, `qu_pe`, `ay_bo`, `se_no`, `ps_af`, `tl_st`, `gx_gr`, `my_mm`, `qz_mm`, `or_in`, `si_lk`, `rw_rw`, `ak_gh`, `nd_zw`, `sn_zw`, `cb_iq`, `ha_ng`, `yo_ng`, `ja_ks`, `lg_ug`, `br_fr`, `zz_tr`, `tz_ma`, `co_fr`, `ig_ng`, `as_in`, `am_et`, `lo_la`, `ny_mw`, `wo_sn`, `ff_ng`, `sc_it`, `ln_cd`, `tk_tm`, `sz_pl`, `bp_in`, `ns_za`, `tn_bw`, `st_za`, `ts_za`, `ss_sz`, `ks_in`, `ve_za`, `nr_za`, `ik_us`, `su_id`, `om_et`, `em_zm`, `qr_gr` and `iu_ca`
