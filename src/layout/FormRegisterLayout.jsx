import React from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';

function FormRegisterLayout() {
  return (
    <>
   
      
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <div className="text-center" style={{textAlign:'center', height:'50px',width:'30px'}}>
        <h1>shooper</h1>
       
    </div>

        

        <p className="lead fw-normal mb-0 me-3" style={{color:"#0F0C0C"}}> <b>Social Sign-Up</b></p>
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
              Sign up with Google
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
              Sign up with Apple
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
              Sign up with Facebook
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
              Sign up with LinkedIn
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
          <MDBCard style={{ marginTop: '20px', width: '753px', boxSizing: 'border-box' }}>
  <MDBCardBody style={{ padding: '0' }}>
    <MDBInput
      wrapperClass='mb-4'
      label='Name'
      placeholder='Your Name'
      id='formName'
      type='text'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '8px',
        width: '100%',
        height: '70px',
      }}
      labelStyle={{
        width: '100%',
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
        width: '100%',
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
      label='Email address'
      placeholder='value'
      id='formEmail'
      type='email'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '8px',
        width: '100%',
        height: '70px',
      }}
      labelStyle={{
        width: '100%',
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
        width: '100%',
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
      id='formPassword'
      type='password'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '8px',
        width: '100%',
        height: '70px',
      }}
      labelStyle={{
        width: '100%',
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
        width: '100%',
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
      label='Confirm Password'
      placeholder='Confirm your password'
      id='formConfirmPassword'
      type='password'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '8px',
        width: '100%',
        height: '70px',
      }}
      labelStyle={{
        width: '100%',
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
        width: '100%',
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
    <MDBBtn
      type='submit'
      style={{
        width: '100%',
        height: '40px',
        backgroundColor: '#2C2C2C',
        borderColor: '#2C2C2C',
        borderRadius: '8px',
        color: '#F5F5F5',
        fontFamily: 'Inter, sans-serif',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '100%',
        textAlign: 'center',
        marginTop: '16px', // Ajustez cette valeur si nécessaire
      }}
    >
      Sign up
    </MDBBtn>
  </MDBCardBody>
</MDBCard>


        </div>
      </MDBContainer>
      <div className="text-center">
        <h3 style={{color:'#0F0C0C', fontSize:'18px', textAlign:'center'}}>Already have an account? [Sign In]</h3>
       

    
      </div>
    </>
  );
}

export default FormRegisterLayout;
