class NegotiationController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputPrice = $("#price");

        this._negotiations = new ListNegotiation();
        this._negotiationView = new NegotiationsView($("#negotiationsView"));
        this._negotiationView.update(this._negotiations);

        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);
    }

    add(event) {
        event.preventDefault();

        this._negotiations.add(this._createNegotiation());
        this._negotiationView.update(this._negotiations);

        this._message.text = "Negotiation inserted.";
        this._messageView.update(this._message);

        this._clearForm();

        console.log(this._negotiations.negotiations);
    }

    _createNegotiation() {
        return new Negotiation(
            DateHelper.strToDate(this._inputDate.value),
            this._inputAmount.value,
            this._inputPrice.value
        );
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputAmount.value = 1;
        this._inputPrice.value = 0.0;

        this._inputDate.focus();
    }
}