class NegotiationsView extends View {

    constructor(element) {
        super(element);
    }

    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>                
                <tbody>
                </tbody>
                    ${model.negotiations.map(n => `
                            <tr>
                                <td>${DateHelper.dateToStr(n.date)}</td>
                                <td>${n.amount}</td>
                                <td>${n.price}</td>
                                <td>${n.total}</td>
                            </tr>
                        `).join('')}
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.negotiations.reduce((total, n) => total + n.total, 0.0)}
                    </td>
                </tfoot>
            </table>
        `;
    }
}