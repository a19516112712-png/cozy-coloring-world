/**
 * Kit (formerly ConvertKit) integration point for the free coloring pack.
 *
 * To connect the lead form:
 * 1. In Kit, create or open the Form that will deliver the 100-page PDF.
 * 2. Copy the form UID from the Form's embed code or URL.
 * 3. Set KIT_FORM_ID to that UID.
 * 4. KIT_FORM_ACTION is taken from the official JavaScript Embed HTML.
 *    It uses the numeric form id for the subscription endpoint.
 *
 * The form posts fields[first_name] and email_address, matching the embed HTML used by Kit.
 */
export const KIT_FORM_ID = "aa2a08aac9";
export const KIT_FORM_ACTION = "https://app.kit.com/forms/9939741/subscriptions";
