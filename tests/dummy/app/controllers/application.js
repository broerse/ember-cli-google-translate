import Ember from "ember";
import translate from "google-translate";

export default Ember.Controller.extend({
  input: '',
  text: '',
  didYouMean: '',
  actions: {
    submit: function() {
      translate(this.get('input'), {from: 'en', to: 'nl'}).then(res => {
        this.set('text', res.text);
        this.set('didYouMean', res.from.text.didYouMean);
      }).catch(err => {
        console.error(err);
      });
    }
  }
});
