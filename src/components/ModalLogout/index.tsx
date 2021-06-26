import React from 'react';
import { View, Text, Modal, ModalProps, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';
import { useAuth } from '../../hooks/auth';

import { theme } from '../../global/styles/theme';

type ModalLogoutProps = ModalProps & {
  closeModal: () => void;
}

export function ModalLogout({ closeModal, ...rest }: ModalLogoutProps) {
  const { signOut } = useAuth();
  
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <Text style={styles.title}>
              Deseja sair do Game
                <Text style={{ color: theme.colors.primary }}>Play</Text>
              ?
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity 
                activeOpacity={0.8} 
                style={[styles.button, { borderWidth: 1, borderColor: theme.colors.secondary30 }]} 
                onPress={closeModal}
              >
                  <Text style={styles.textButton}>Não</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.button, { backgroundColor: theme.colors.primary }]}
                onPress={signOut}
              >
                <Text style={styles.textButton}>Sim</Text>
              </TouchableOpacity>
            </View>
          </Background>
        </View>
      </View>
    </Modal>
  );
}