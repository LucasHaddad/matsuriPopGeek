<template>
  <v-flex xs12 sm10 offset-sm1>
    <v-img id="logo" :src="require('../assets/logo.png')"/>
    <v-expansion-panel>
        <v-expansion-panel-content
        v-for="(item,i) in 5"
        :key="i"
        >
        <template v-slot:header>
            <div>Item</div>
        </template>
        <v-card>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<style>
#logo {
    height: 100%;
}
</style>
