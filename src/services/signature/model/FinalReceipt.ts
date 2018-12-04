import { Email } from './Email';
import { SMS } from './SMS';

export interface FinalReceipt {
  /**
   * Determines if you want to include the signed main document as an attachment to
   * the email notification. Not recommended for sensitive documents.
   */
  includeSignedFile?: boolean;

  /**
   * A list of custom email texts to use for the notification. Default texts will be used if not specified.
   */
  email?: Email[];

  /**
   * A list of custom SMS texts to use for the notification. Default texts will be used if not specified.
   */
  sms?: SMS[];
}
