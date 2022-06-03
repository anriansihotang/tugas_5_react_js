import React, { Component } from "react";

class FormMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesanan: "",
            jumlah: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ref = React.createRef();
    }

    handleChange (e) {
        this.setState({pesanan: e.target.value});
    }
    handleChangeJumlah (e) {
        this.setState({jumlah: e.target.value});
    }
    handleSubmit (e) {
        e.preventDefault();
        alert("Pesanan Anda Adalah : " + this.state.pesanan + " | Jumlah Pesanan: " + this.state.jumlah);
        this.ref.current.focus();
        this.setState({pesanan: "", jumlah: ""});
    }
    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            onChange={this.handleChange} 
                            type="text"
                            value={this.state.pesanan}
                            ref={this.ref}
                            placeholder="Masukkan Pesanan Anda"
                        />
                        <input 
                            type="number"
                            value={this.state.jumlah}
                            onChange={this.handleChangeJumlah}
                            placeholder="Masukkan Jumlah Pesanan"
                        />
                        <br /> <br />
						<input type="submit" value="Pesan" />
                    </form>
                </center>
            </div>
        )
    }
}

export default FormMakanan;