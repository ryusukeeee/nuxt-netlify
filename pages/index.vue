<template>
  <layout-wrapper>
    <layout-visual
      title="NUXT SMAPLE SITE DEMO"
      message="お知らせやメニューをmicroCMSを導入したDEMOサイトになります。"
    />
    <div>
      <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
        <base-heading> MdN Cafeのおすすめメニュー </base-heading>
        <div class="flex md:flex-wrap justify-between mb-20 md:mb-0">
          <layout-menu-list
            v-for="(item, index) in menuItems"
            :key="index"
            :image="item.image"
            :image-url="item.image.url"
            :name="item.name"
            :body="item.body"
            :price="item.price"
            wrap-class="flex md:flex-wrap justify-between mb-20 md:mb-0"
            item-class="md:w-56 mb-20 shadow-lg bg-gray-200"
            block-class="max-w"
            image-class="w-full"
            data-class="px-6 py-4"
            :flag-body="false"
          />
        </div>
        <base-button name="メニューの一覧" link="/menu/" />
        <h2 class="font-sans text-lg text-gray-800 text-center text-3xl mb-10">
          MdN Cafeのお知らせ
        </h2>
        <layout-information-list
          v-for="(item, index) in infoItems"
          :id="item.id"
          :key="index"
          :date="item.date"
          :title="item.title"
        />
        <base-button name="お知らせの一覧" link="/information/" />
      </div>
    </div>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config }) {
    const menu = await axios.get(
      `${$config.apiUrl}menu?limit=3&filters=flag[equals]true`,
      {
        headers: { 'X-API-KEY': $config.apiKey },
      }
    )
    const info = await axios.get(`${$config.apiUrl}information?limit=3`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      menuItems: menu.data.contents,
      infoItems: info.data.contents,
    }
  },
}
</script>

<style>
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
</style>
