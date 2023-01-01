import "./Details.css"
import aw from "./airworks.png";
import { Link } from "react-router-dom";

const Details=()=>
{ 

    return(

        <div className="total">
            <div className="upper">
            <img src={aw} alt="nothing"></img>
            <div>
      <input placeholder="Search"/>
      </div>
    </div>
    <h3>Order Details</h3>
        <table>
            <tr>
                <th colSpan={5}>Air Asia-DQJ4VK</th>
            </tr>
            <tr>
                <td>
                    Order-Number
                </td>
                <td>
                    AJ-964291
                </td>
            </tr>
            <tr>
                <td>
                    Part-ID
                </td>
                <td>
                    ENG-66346
                </td>

            </tr>
            <tr>
                <td>
                    Part position
                </td>
                <td>
                    rear
                </td>
            </tr>
            <tr>
                <td>
                    priority
                </td>
                <td>
                    medium
                </td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
        </table>
        <button><Link to="/">Process Order</Link></button>
        </div>
    )
}

export default Details