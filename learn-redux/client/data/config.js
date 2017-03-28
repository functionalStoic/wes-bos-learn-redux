import Raven from 'raven-js';

const sentry_key = 'b7f9e2e54e2146e089e27cd754d1b76b';
const sentry_app = '151430';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
