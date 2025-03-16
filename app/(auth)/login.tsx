import { Dimensions, ScrollView, Text, View, Image, Alert ,KeyboardAvoidingView,Platform } from 'react-native'
import { SafeAreaView, } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { useState } from 'react'
import Button from '@/components/Button'

export default function login() {

  // กำหนดตัวแปร State สำหรับเก็บค่าของ Email และ Password
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  // กำหนดตัวแปรเก็บสถานะการ submit ข้อมูล
  const [isSubmitting, setIsSubmitting] = useState(false)

  // ฟังก์ชัน submit form สำหรับการเข้าสู่ระบบ
  const submit = async () => {

    setIsSubmitting(true)

    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields")
      setIsSubmitting(false)
    } else {
      login()
      setIsSubmitting(false)
    }

    console.log(form.email, form.password)
  }

  return (
    <SafeAreaView className='px-4  bg-gray-900 h-full'>
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        className='h-full' >
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 "
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to AuraShop
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e:any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e:any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles="mt-7 bg-orange-500 text-white py-5"
            isLoading={isSubmitting}
            
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Button title="Register" onPress={() => router.replace('/register')} /> {/*เปลี่ยน link เป็น button*/}
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}