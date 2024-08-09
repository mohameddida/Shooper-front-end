import React from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function FormLoginLayout() {
  return (
    <>

<h1 style={{
  textAlign: 'center', // Centre le texte à l'intérieur de <h1>
  margin: 0,           // Supprime les marges automatiques si elles existent
}}>
  Shooper
</h1>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      

      <p className="lead fw-normal mb-0 me-3"> <b>Sign in</b></p>
      {/* Social Media Buttons */}
      <div className="d-flex flex-wrap justify-content-between mx-auto mb-4" style={{ width: '80%' }}>
      <MDBBtn
  className='m-1'
  style={{
    color: '#ffffff',
    backgroundColor: '#D9D9D9',
    flexBasis: 'calc(50% - 10px)',
    padding: '10px 20px', // Adjust padding for better alignment
    borderRadius: '29px', // Ensure border radius matches design
  }}
>
<span style={{
  fontFamily: "'Poppins', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '28px',
  color: '#0F0C0C',
  textTransform: 'none', // Désactive toute transformation de texte
  display: 'block',
  textAlign: 'center',
  width: '100%',
}}>
  Sign in with Google
</span>

</MDBBtn>
        <MDBBtn
  className='m-1'
  style={{
    color: '#ffffff',
    backgroundColor: '#D9D9D9',
    flexBasis: 'calc(50% - 10px)',
    padding: '10px 20px', // Adjust padding for better alignment
    borderRadius: '29px', // Ensure border radius matches design
  }}
>
<span style={{
  fontFamily: "'Poppins', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '28px',
  color: '#0F0C0C',
  textTransform: 'none', // Désactive toute transformation de texte
  display: 'block',
  textAlign: 'center',
  width: '100%',
}}>
  Sign in with Apple
</span>

</MDBBtn>
        <MDBBtn
  className='m-1'
  style={{
    color: '#ffffff',
    backgroundColor: '#D9D9D9',
    flexBasis: 'calc(50% - 10px)',
    padding: '10px 20px', // Adjust padding for better alignment
    borderRadius: '29px', // Ensure border radius matches design
  }}
>
<span style={{
  fontFamily: "'Poppins', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '28px',
  color: '#0F0C0C',
  textTransform: 'none', // Désactive toute transformation de texte
  display: 'block',
  textAlign: 'center',
  width: '100%',
}}>
  Sign in with Facebook
</span>

</MDBBtn>
        <MDBBtn
  className='m-1'
  style={{
    color: '#ffffff',
    backgroundColor: '#D9D9D9',
    flexBasis: 'calc(50% - 10px)',
    padding: '10px 20px', // Adjust padding for better alignment
    borderRadius: '29px', // Ensure border radius matches design
  }}
>
<span style={{
  fontFamily: "'Poppins', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '28px',
  color: '#0F0C0C',
  textTransform: 'none', // Désactive toute transformation de texte
  display: 'block',
  textAlign: 'center',
  width: '100%',
}}>
  Sign in with LinkedIn
</span>

</MDBBtn>

      </div>

      <div style={{ position: 'relative', width: '100%' }}>
  <div style={{
    width: '100%', // Adapte la largeur du <div> à celle du parent
    height: '36px',
    position: 'relative',
    top: '-20px', // Ajustez cette valeur pour le placer juste au-dessus du <MDBCard>
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '36px',
    color: '#000000',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  }}>
    --------------------------- OR --------------------------
  </div>

  {/* Form Inputs */}
  <MDBCard style={{ marginTop: '20px' }}> {/* Ajustez ce margin-top pour affiner le positionnement */}
    <MDBCardBody>
    <MDBInput
  wrapperClass='mb-4'
  label='Email address'
  placeholder='value'
  id='form1'
  type='email'
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '753px',
    height: '70px',
  }}
  labelStyle={{
    width: '753px',
    height: '22px',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '140%',
    color: '#1E1E1E',
  }}
  inputStyle={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px 16px',
    width: '753px',
    minWidth: '240px',
    height: '40px',
    background: '#FFFFFF',
    border: '1px solid #D9D9D9',
    borderRadius: '8px',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    color: '#B3B3B3',
  }}
/>

<MDBInput
  wrapperClass='mb-4'
  label='Password'
  placeholder='value'
  id='form2'
  type='password'
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '8px',
    width: '753px',
    height: '70px',
  }}
  labelStyle={{
    width: '753px',
    height: '22px',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '140%',
    color: '#1E1E1E',
  }}
  inputStyle={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px 16px',
    width: '753px',
    minWidth: '240px',
    height: '40px',
    background: '#FFFFFF',
    border: '1px solid #D9D9D9',
    borderRadius: '8px',
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    color: '#B3B3B3',
  }}
/>



      <div className="d-flex justify-content-between mx-3 mb-4">
        <a href="!#" style={{ color: '#000000' , }}>Forgot password?</a>
      </div>

      <MDBBtn
        className="mb-4"
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          gap: '8px',
          width: '100%', // Adapte la largeur du bouton à celle du parent
          height: '40px',
          backgroundColor: '#2C2C2C',
          border: '1px solid #2C2C2C',
          borderRadius: '8px',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '100%',
          color: '#F5F5F5',
          flex: 'none',
          order: 1,
          flexGrow: 0
        }}
      >
        Sign in
      </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</div>


      <div className="text-center">
        <h3>Create Account</h3>
       

    
      </div>
    </MDBContainer>
    </>
  );
}

export default FormLoginLayout;
