import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const LoginScreen = () => {

  useEffect(() => {
    // Inicializa o Google Sign-In
    GoogleSignin.configure({
      webClientId: '587121433603-r6353kb1fo9o72a663bmsrn6fooo32dj.apps.googleusercontent.com',  
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      // Tenta fazer login com o Google
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo); 
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

