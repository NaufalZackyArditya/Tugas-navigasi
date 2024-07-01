import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Contact from './Contact';

const Daftar = ({ navigation }) => {
  return (
    <ScrollView>
      <Contact
        gambar={require('../assets/alwi.png')}
        judul="M.alwi"
        nim="2230511128"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/api.png')}
        judul="Rafli Zacky A"
        nim="2230511108"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/opay.png')}
        judul="Naufal Zacky A"
        nim="2230511107"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/fazar.png')}
        judul="Fazar Fasca Gumilang"
        nim="2230511124"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/sang.png')}
        judul="Ubang"
        nim="2230511133"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/snack-icon.png')}
        judul="Wahyu Prayogo"
        nim="2230511118"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/snack-icon.png')}
        judul="Ilham Mukjizat"
        nim="2230511113"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

      <Contact
        gambar={require('../assets/fauzul.png')}
        judul="M.Fauzul Hanif"
        nim="2230511102"
        deskripsi="Mahasiswa di Universitas Muhammadiyah Sukabumi Semester 4 dari Kelas C"
        navigation={navigation}
      />

    </ScrollView>
  );
};

export default Daftar;
