import React, { Component } from "react";
import FormMakanan from "../Form/FormMakanan";
import DaftarMakanan from "../Lib/DaftarMakanan";

const ListMakanan = [
    {
        namaMakanan: "Nasi Padang",
        harga: "20.000",
    },
    {
        namaMakanan: "Sate",
        harga: "20.000",
    },
    {
        namaMakanan: "Soto",
        harga: "10.000",
    },
    {
        namaMakanan: "Nasi Uduk",
        harga: "10.000",
    },
    {
        namaMakanan: "Nasi Kuning",
        harga: "15.000",
    },
    {
        namaMakanan: "Ayam Geprek",
        harga: "10.000",
    },
    {
        namaMakanan: "Pecel Lele",
        harga: "10.000",
    },
    {
        namaMakanan: "Pecel",
        harga: "10.000",
    },
    {
        namaMakanan: "Mie Ayam",
        harga: "10.000",
    }
]

class MenuMakanan extends Component {
    render() {
        return (
            <div>
                <h3>Daftar Makanan Terfavorit</h3>
                <table>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map ((value, index) => {
                                return (
                                    <td key={index}>
                                        <img src={value.img} 
										alt="" 
										width="150" 
										height="100" />
                                        <center>
                                            <p>{value.NamaMakanan}</p>
                                            <p>Harga : RP. {value.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
                <h4>List Makanan</h4>
                {ListMakanan.map ((value, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {value.namaMakanan} | Harga Rp. {value.harga}
                            </p>
                        </div>
                    )
                })}
				<FormMakanan />
            </div>
        )
    }
}

export default MenuMakanan;