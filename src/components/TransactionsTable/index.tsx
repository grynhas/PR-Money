import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>valor</th>
                        <th>categoria</th>
                        <th>data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit" >R$ 1000,00</td>
                        <td>Salário</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
                        <td>Almoço</td>
                        <td className="withdraw">- R$50,00</td>
                        <td>Almoço</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>    
                        <td>Lazer</td>
                        <td>R$ 100,00</td>
                        <td>Lazer</td>
                        <td>20/06/2020</td>
                    </tr>
                </tbody>    
            </table>
        </Container>
    );
}