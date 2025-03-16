import { View, Text, ScrollView, Image, Dimensions, Button,KeyboardAvoidingView,Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link,router } from 'expo-router'
import { images } from '@/constants'

export default function register() {
  return (
    <SafeAreaView className="bg-gray-900 h-full px-4 ">\
    <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'}
            className='h-full' >
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 "
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <View className="flex items-center">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="h-[34px]"
              />
            </View>

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up to AuraShop
          </Text>

          <FormField
            title="Username"
            value={null}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={null}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={null}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Register"
            handlePress={() => {}}
            containerStyles="mt-7"
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Button title="Register" onPress={() => router.replace('/login')} /> {/*เปลี่ยน link เป็น button*/}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}