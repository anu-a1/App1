import React,{Component} from 'react';
import ExcelIcon from '../../icons/Excel.png';
import {Link, withRouter} from 'react-router-dom';
import {Button} from "react-bootstrap";




export class Home extends Component
{
    render()
    {
        return(
            <div>
                <div>
                    <Button bsStyle = "danger">here</Button>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <Button type="Submit">Prepare Allocations</Button>
                                <div></div>
                                <Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link>
                            </td>
                            <td><button type="Submit">Calculate</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                            <td><button type="Submit">Post</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                        </tr>
                        <tr>
                            <td><button type="Submit">Prepare Allocations</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                            <td><button type="Submit">Calculate</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                            <td><button type="Submit">Post</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                        </tr>
                        <tr>
                            <td><button type="Submit">Prepare Allocations</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                            <td><button type="Submit">Calculate</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                            <td><button type="Submit">Post</button></td>
                            <td><Link to="/"><img src={ExcelIcon} className="img-responsive" alt="logotype" /></Link></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

