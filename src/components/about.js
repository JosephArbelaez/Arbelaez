import React from 'react';

class About extends React.Component {
    render(){
        return (
            <div className="aboutPage">
                <div className="name">
                    <h1>Joseph <span className="lastName">Arbelaez</span></h1>
                </div>            
                <div className="description">
                    <p >Dedicated web developer, with a passion for designing web applications. Developed an
                    expense reimbursement system, a social platform, and a lawyer / client portal. My hard work
                    has placed me into two scholastic honor societies, an internship and propelled me through the
                    Revature coding boot camp.</p>
                </div>
                <div className="icons">
                    <a className = "icon" href="https://www.linkedin.com/in/joseph-arbelaez-a064708b/">
                    <img src="https://lh3.googleusercontent.com/pbWSavYhxhJCyycDZT_RcagNnZFKpRGMQxIFQaEz9h6S0SYrU56lGSv8TgRSIo5ThTrulztA5dhmZ7eBbJPAeEGNfIherPbWPCxdazCzXc1Q94W4goMXXGfTWC_q9fa2IO0lJcb-qE5pFuMMKDJIwBbMBsIpK7OJewDOnfbr5h4dfx2lee2Zsm8CnjZiXcel1Eg1QI0mh_jPHfDfA-gvvvM31MgeKH2X8HDPl2vXNQV1IBkEnoO0O18kTiI5YhSYjLL_AnTwl_L_eoFVJEWr6Hhu9wqXTe7r9Cch8a4jwfLDVdQYGl2BsCui6h2s3w2RqQUgqotOUCUjILXhmGIIjPfLvA98saM3lMeab7pjZMgPwKFldQasQYJf9ZzUJt057cIVffN-VTc8r0MB45ykRXQzElIL5maL4H6jo7J2l_0Q9P6D7tYPP0Ckm6fZ9iq_B5UJsAiVE8drOyntYiy8iba_NQABqbA_ibyaNUb6ka0ZM0HpQNJODDniHYQVdrGFVFhQBUtmZwqfIbWL_ccAIPZJEIO_-6Im6qB1pm0zvpdrU_X0EAtBRNnQC4EPJBM2UX_dcjVAMposWeCsnpSXv4raukpGMUwq82_5hXJ5sJrsLbGD4-WWNrgyHvjN01SiwCwlzbpBCBcly1ZaACrSGdJR24ZTcIw=s64-no" ></img>
                    </a>
                    <a className = "icon" href="https://github.com/JosephArbelaez">
                    <img src="https://lh3.googleusercontent.com/QoGtTLilIXTToLsTddgAZM_Om9mMj4YWEnVOZMAfdtFfqjpJ6jS_8_mCALdqXD7i-OjEGnsVIG9m3uac-GdjiMh_sTRDUVeBUmmZatKf-Ln_tivbl1fcMw-RHe8akGFIrZur4wfeVd5Xecw4u4Y9ZABqKKN4X1Ykxorr_SdRCVp7y5u9_srFt2zeBMEjfwnXTRvNvGtZsdbbpBiEa8sRO3KGENkcu7uPp77Fz8-oCCf_iGXVwV6qCFLOItIVLnadNR54zAPL3Q1r0zXXW3jRoYU56lkuesSMaLMRXGAJjvI5mwP-LpLWsmbvUjlNInDRDRm6xKTX9xGDgA7HnQQC90A9QznFHbDVQkeaDtwZYknb19UUQmesaC0MyOrHbv2H9SGYNP1M6BKefqzeRzUtJ89G07IShYAFaIYUDLq016H1CinzAAY6xDP3N1HK365x_Gw829OcUj9MR32qUU2P25b7-29l25DeiKg7UaNTbwr0FQYqsX0_1Q1oFyU4_CNqrTFVv7yMGma5cutfY6WGk3nN-hSqoXFjztSUL68P5SqigJI6arv3iEIRE6g7-OYI9K3FO1ier14kOlGrmZYs4aAPkOlQ4I8v7ekeB71zXbHE8AI8AS8KKFdB28wXJ0XwMF2b_Llu2hgOMFx34F4pUzH-mHnlZqI=s64-no" ></img>
                    </a>
                    <a className = "icon" href="mailto:josepharbelaez@gmail.com">
                    <img src="https://lh3.googleusercontent.com/ZvpyAoWdk7pCR5oAIf_s-yhQToFzDf269jPsov-52dYIMJWS01_jtlJqP_9apcI8DGW_pRn5ESSNRydiSJl5jrRK8CLkjEmbUGPj2VyNFBt9M_yvS-FYqhW5cd_aZb7hwhNnFxAsWFhq18Tc4AQ9HEHdwMnfczftdyko2oaLsILrRmNgwMM7Nicb54iFRdz3rKeR-qPVTUZ9oFpRlvdWTW7pRfAGLQ-V145SKK1LFKoqweCUPsaP1LMXnCXGS1dSMw0K1cHQBJlxaH4x3yxtZf6A7dGEC26u-Z6yuhZNlpN-msq5R5-shLTCGPTtqtQOzu6U-otUlLxEWJhXw-zZIfjtLCwOVATyq7tapTDdyt-v0UGoUWbHS_lt1um97UbFW17U1h5_N_DfWGdCJth32cjjgGr6m2hTUNK1AfkcmCtFNbSSVdSJijNN5zJ_Tj2v8NP2zUHm-pFbWACipFUN855l6iEbQlvoR3KYSqcZbWzPxuaTx1A7mWhRGOhA-vnmJHb79MFdHgX1k1Eqc7PaUJcOWUI-lAPa5MIcH1HiEvbAIr7gKH1dq9jfuRBFEPw_f-WD06hJ3dI76jDwt9aHvwYBU6oJ2T743M3MwlrwgjCnH-vOyHpe4Oa-rtN_xhw96Vf3ktVoflSUFzrfOfwSsR5NRAa1zAs=s64-no" ></img>
                    </a>
                </div>
            </div>
        );
    }
}


export default About;