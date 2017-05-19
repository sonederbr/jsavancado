class NegotiationController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputPrice = $("#price");
        this._negotiations = new ListNegotiation();
    }

    add(event) {
        event.preventDefault();

        this._negotiations.add(this._createNegotiation());
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