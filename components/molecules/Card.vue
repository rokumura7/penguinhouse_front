<template>
  <div class="p-4 h-full border rounded border-gray-500 max-w-sm">
    <template v-if="isCreate">
      <div class="mb-2 cursor-pointer">
        <input class="font-bold w-full border-b" />
      </div>
      <div class="mb-2 line-clamp-2">{{ content.description }}</div>
      <div class="relative">
        Add Labels :
        <input
          v-model="keyword"
          class="w-full border-b"
          @click="isOpenLabelList = true"
          @keydown.enter="trigger"
        />
        <div
          v-if="isOpenLabelList"
          class="absolute flex top-10 overflow-hidden shadow w-full max-h-64"
        >
          <div class="flex-grow overflow-auto w-full">
            <ul class="w-full">
              <li
                v-for="item in getLabelList"
                :key="item"
                class="bg-white border border-b-0 cursor-pointer p-2 w-full"
                role="menuitem"
                @click="addLabel(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="space-x-1 mb-2">
        <Chip v-for="label in labels" :key="label" :label="label" />
      </div>
      <div class="text-right w-full">
        <Button
          label="Create"
          size="small"
          type="primary"
          @myClick="addContent"
        />
      </div>
    </template>

    <template v-else>
      <div class="font-bold mb-2 cursor-pointer truncate" @myClick="openModal">
        {{ content.title }}
      </div>
      <div class="mb-2 line-clamp-2">{{ content.description }}</div>
      <div class="space-x-1 mb-2">
        <Chip
          v-for="tag in content.tags"
          :key="tag"
          :label="getLabel(tag)"
          :color="getColor(tag)"
        />
      </div>
      <div class="text-sm text-gray-700 text-right w-full">
        Last update: {{ content.updatedBy }} {{ content.updatedAt }}
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Chip, Button } from '@/components/atoms'
import { ContentModel } from '@/models/contentModel'
import { Label } from '@/models/enums'
import { colors } from '@/plugins/Colors'
import { getEnumArray } from '@/plugins/utils'

export default Vue.extend({
  name: 'Card',
  components: { Chip, Button },
  props: {
    content: {
      type: Object,
      default() {
        return { id: 0 }
      },
    } as PropOptions<ContentModel>,
    isCreate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpenLabelList: false,
      keyword: '',
    }
  },
  computed: {
    labels() {
      return this.$accessor.card.labels
    },
    getLabel() {
      return function (tag: number) {
        return Label[tag]
      }
    },
    getColor() {
      // TODO: it should be gotten from DB
      return function (tag: number) {
        return tag < colors.length ? colors[tag] : colors[0]
      }
    },
    getLabelList() {
      const formedKeyword = this.keyword.toLowerCase()

      return getEnumArray(Label).filter((label) =>
        label.toLowerCase().includes(formedKeyword)
      )
    },
  },
  methods: {
    addLabel(label: string) {
      this.$accessor.card.addLabel(label)
      this.closeList()
    },
    trigger(event: KeyboardEvent) {
      if (event.code === 'Enter') {
        this.$accessor.card.addLabel(this.keyword)
        this.closeList()
        this.keyword = ''
      }
    },
    closeList() {
      this.isOpenLabelList = false
    },
    openModal() {
      // TODO:
    },
    addContent() {
      // TODO:
    },
  },
})
</script>
