import React from 'react';
import { Image, ScrollView, Pressable } from 'react-native';
import { View, Text } from '@/components/Themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="p-4">
          {/* Profile Info */}
          <View className="items-center mb-6 mt-5">
            <Image
              source={{ uri: 'https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-1/378179169_1485398745551719_9170078321769565935_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHoMLrQVs-IiHNxl6Z8AFI7OTq1B1mJK6M5OrUHWYkro245mgsvRozx3TbL4IMJYM_T5-Yraru8heLFJGx7RsfI&_nc_ohc=MhBUp3M07EIQ7kNvgH87QiO&_nc_oc=AdiQXXzdDtW5nZUD6yIFyO4QMpsnIgMZQk_w0X3oD89IyPRdNJ31ykCmm9jDDpmzzGg&_nc_zt=24&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=P7Ym5EXEDx31mRm3W0yzbA&oh=00_AYGEmavwJwfBsWzchQ7jdAlXBXFl6iSrQ_He4-lTsVDAEA&oe=67DED6C7' }}
              className="w-20 h-20 rounded-full"
            />
            <Text className="text-3xl mt-5" fontWeight='medium'>ปิลันทน์ กาษร</Text>
            <Text className="text-blue-400 text-base">ดูโปรไฟล์ Marketplace</Text>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รายการที่บันทึกไว้')}>
              <FontAwesome name="heart" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">รายการที่บันทึกไว้</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: กล่องข้อความ')}>
              <FontAwesome name="envelope" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">กล่องข้อความ</Text>
            </Pressable>
          </View>
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รีวิว')}>
              <FontAwesome name="star" size={24} className='dark:!text-white'   />
              <Text className="mt-2 text-center">รีวิว</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: ดูล่าสุด')}>
              <FontAwesome name="clock-o" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">ดูล่าสุด</Text>
            </Pressable>
          </View>

          {/* Sections */}
          <Section title="การขาย">
            <SectionItem icon="list" text="รายการสินค้าของคุณ" />
            <SectionItem icon="bolt" text="การดำเนินการด่วน" />
            <SectionItem icon="users" text="ผู้ติดตามบน Marketplace" />
            <SectionItem icon="line-chart" text="กิจกรรมการขายทั้งหมด" />
          </Section>

          <Section title="การตั้งค่า">
            <SectionItem icon="cog" text="กำลังติดตาม" />
          </Section>

          <Section title="บัญชี">
            <SectionItem icon="map-marker" text="ตำแหน่ง" />
            <SectionItem icon="lock" text="ความปลอดภัย" />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View className="mb-6">
    <Text className="text-lg text-gray-100" fontWeight='medium'>{title}</Text>
    {children}
  </View>
);

const SectionItem = ({ icon, text }: { icon: string, text: string }) => (
  <Pressable
    className="flex-row items-center mb-4 p-2 rounded-lg"
    onPress={() => console.log(`Pressed: ${text}`)}
    android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }}
  >
    <FontAwesome name={icon as any} size={24} className="mr-4 dark:!text-white" />
    <Text className="text-base">{text}</Text>
  </Pressable>
);