class ImageWithPreloading extends React.Component {
  constructor(props) {
    super();
    this.state = {
      imageUrl: props.thumbnail
    };
  }

  onOriginalLoad() {
    this.setState({ 
      imageUrl: this.props.original 
    });
  }

  componentDidMount() {
    var img = new Image();
    img.onload = this.onOriginalLoad.bind(this);
    img.src = this.props.original;
  }

  render() {
    console.log(this.state.imageUrl);
    return (
      <img className="image-with-preloading" src={this.state.imageUrl} />
    );
  }
}

var props = {};
props.thumbnail = 'https://lh3.googleusercontent.com/XrUerT6KpaXnEVgPXDPJB9-2TvMbloqtAf0GY0W_qV3vvdVD-kshB6ZtYc6FnQJT90cDs698PYPzD4ZNDp56F1gtw_5NEtkLKLw5aZE2Pbuk8Oo8dwQrcTStCUeD6zWE84NHEL4It6kUD3EpSrhzyewUE5S9PjY4NdTJwE7N-Ux2Z_fiAfSG3tvmcIzaw73jATsnp8vRIOr-GeRuo0hU_yqRu3-5bBJnGyrZCrqxUV7N4M3py7RqkYCuWs9HYL3eAUYHpH5IS8C3OCS6lwg_XXS8NrKkSHAhOedzCqPTz_pD382s-sAdG5wOP41Na-3c6N4NhN28KxG07P_KGjuPLd8uib61x0iXdurmgV-DTmd-bn_Mbqgd9vzpPvHaexmqgVcAh2UpYfxJLv549r0RScHs2Er5KyqewJ5CtINwFApNmhF7ifqQHfbrQPhOkJnqIzdZ23lOZvaeXTyXanc2t3AmcL32ux96CxCufh9pYvbQOl1Jf4RGNTIW1Af5y17v9NTPrXHdelU_mgvDzR9d42xNHxOLJnLHzXvPggx-dTQGj-Let1NRIL_UhUmOLG_78KtG=w287-h192-no';
props.original = 'https://lh3.googleusercontent.com/hnf-5VtmcA0x48sUjYvQceNmfC8-SzbJxBiS3-02Jd_JPQiXKjanGavJT9o6rF1w9jFor7--BmwrALXk7XqZEjay1Y-JDw6IcEUeEalBdQ3_CZgi5abyiyI5Xjl3TLubQmBrjRBH4ZXd8JAxFPdhbmmorzKGmodJ_TbId6Of6pHqpeiBlkkv-AO3zB_iMt-KuoSQE2OOqDAthLNFIN62662jZLmTvdVjD2NHHL_fhPJaKlCmOiCPsU8aua2sVArfUzLIg-sapniOh-cIuYF6niCTYPxWjPR0DcU45uwE9M5luY1qkeBKqxyA7_j2mhPIJNYa8vp7IIvFfDehGHDiVXjlV35RiqgSm1wLfKe6Irqnm30pA51EMmh9zePJgGbl8wT31GkctjALoKmxJOPwXEebZQANyRym5LiTx_dVmzFLyAaTEz4QRaLaRi7qGF3f_nbU1nfq6PTD7js1no6mSSj4FLs5ohNbW9W-j82e7Cn6WMqquE-XR-VihKi4ehnD_mO7yRbi09W1zaxYAy7cNlMYzMdFq0QWD5--h_ygbVseupPej081nN3SN_0fGqMOOFTg=w3872-h2592-no';

ReactDOM.render(
  <ImageWithPreloading {...props} />,
  document.getElementById('content')
);


