class NegotiationController {
    
    constructor() {

        let $ = document.querySelector.bind(document);
        
        this._inputDate = $("#date");
        this._inputAmount = $("#amount");
        this._inputPrice = $("#price");

        this._negotiations = new Bind(new ListNegotiation(), 
            new NegotiationsView($("#negotiationsView")), 
            'add', 'clear');

        this._message = new Bind(new Message(), 
            new MessageView($('#messageView')), 
            'text');
    }

    add(event) {

        event.preventDefault();

        this._negotiations.add(this._createNegotiation());
        this._message.text = "Negotiation inserted.";

        this._clearForm();
    }

    clear(){
        
        this._negotiations.clear();

        this._message.text = "Negotiations cleared."
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