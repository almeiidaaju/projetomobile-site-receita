import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const LoginScreen = () => {

  useEffect(() => {
    // Inicializa o Google Sign-In
    GoogleSignin.configure({
      webClientId: 'YOUR_GOOGLE_CLIENT_ID',  // Substitua com sua ID do Cliente OAuth 2.0
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      // Tenta fazer login com o Google
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo); // Aqui você pode salvar as informações do usuário
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Logo</Text>
        </View>
        <Text style={styles.headerText}>Bem-vindo</Text>
      </View>

      {/* Google Sign-In Button */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}  // Logo do Google
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Minha Empresa</Text>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    header: {
        backgroundColor: '#ff944d',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        },
    
        logo: {
        width: 70,
        height: 80,
        borderRadius: 30,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#ff944d',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        },
    
        logoText: {
        color: '#ff944d',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 10,
        },
    
        headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        },
    
        inputContainer: {
        alignItems: 'center',
        marginTop: 30,
        },
    
        input: {
        width: '90%',
        backgroundColor: '#ff944d',
        padding: 12,
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10,
        color: '#fff',
        },
    
        forgot: {
        color: '#ff944d',
        marginBottom: 20,
        },
    
        googleButton: {
        flexDirection: 'row',
        backgroundColor: '#ff944d',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        },
    
        googleIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        },
    
        googleText: {
        color: '#fff',
        fontWeight: 'bold',
        },
    
        footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ff944d',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        },
    
        footerIcon: {
        width: 20,
        height: 20,
        marginBottom: 5,
        },
        
        footerText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        },
    
        
    
    
    })
