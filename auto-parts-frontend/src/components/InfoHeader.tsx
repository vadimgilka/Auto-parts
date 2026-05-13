import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


type TopNavProps = {
  title?: string;
  onBack: () => void;
};

export const InfoHeader: React.FC<TopNavProps> = ({ title, onBack }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.navContainer}>
      <View style={styles.navContent}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.navTitle}>{title ?? 'Информация'}</Text>
        
        {/* Пустой блок справа для баланса, если заголовок по центру */}
        <View style={{ width: 40 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: 'black',
    zIndex: 10,
  },
  navContent: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
