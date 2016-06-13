// ==UserScript==
// @name         Consors VISA reports
// @namespace    https://fre-y.de/
// @version      0.1
// @description  Generate reports!
// @author       Tobias Frey
// @include      https://www.consorsbank.de/ev/Mein-Konto-und-Depot/Konten/Umsatzuebersicht*
// @include      https://www.consorsbank.de/ev/-?docId=1339272*
// @grant        none
// ==/UserScript==

// @require http://code.jquery.com/jquery-latest.js

(function() {
    'use strict';

        jQuery('form > .evr-date-range-days').after('<a href="javascript:void(0);" class="button primary">Hide VISA</a>');
	    jQuery('form > .evr-date-range-days').after('<a href="javascript:void(0);" style="margin-left: 30px;" class="button primary">Hide Normal</a>');

	        var normalButton = jQuery('form > .evr-date-range-days').next();
		    var visaButton = normalButton.next();

		        normalButton.click(function() {
			        if(normalButton.text() == 'Show Normal') {
				            normalButton.text('Hide Normal');
					            } else {
						                normalButton.text('Show Normal');
								        }

									        jQuery('tr.abaxx-list-item').each(function(index, element) {
										            if(jQuery(element).find('.ev-table-cell-secondary-data').text().toLowerCase().indexOf('visa') === -1) {
											                    jQuery(element).toggle();
													                }
															        });
																    });

																        visaButton.click(function() {
																	        if(visaButton.text() == 'Show VISA') {
																		            visaButton.text('Hide VISA');
																			            } else {
																				                visaButton.text('Show VISA');
																						        }

																							        jQuery('tr.abaxx-list-item').each(function(index, element) {
																								            if(jQuery(element).find('.ev-table-cell-secondary-data').text().toLowerCase().indexOf('visa') > -1) {
																									                    jQuery(element).toggle();
																											                }
																													        });
																														    });

																														    })();
