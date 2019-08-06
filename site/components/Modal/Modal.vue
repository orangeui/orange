<template>
  <transition name="modal">
    <div class="modal-window" v-if="showModal">
      <div class="modal__close" @click="onClose" v-if="args.showCloseBtn">
        Cancel <i class="cancel icon"></i>
      </div>

      <div class="modal-container" :class="{ 'modal-container--shadow': args.shadow, 'modal-container--large': args.modalLarge }" v-on-clickaway="onClose">
        <component :is="currentModal" :args="args" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
/*
  * Common Modals
  * */
/* Action */
import CommonActionModal from 'components/common/modals/CommonActionModal'
/* Info */
import CommonInfoModal from 'components/common/modals/CommonInfoModal'

/* Card Details */
import CardDetailsModal from 'components/common/modals/CardDetailsModal'
/* Advertiser Video Intro */
import AdvertiserIntroVideoModal from 'components/common/modals/AdvertiserIntroVideoModal'
/* Publisher Video Intro */
import PublisherIntroVideoModal from 'components/common/modals/PublisherIntroVideoModal'

export default {
  name: 'modal',

  components: {
    /*
       * Common Modals
       * */
    /* Action */
    'common-action-modal': CommonActionModal,

    /* Card Details */
    'card-details-modal': CardDetailsModal,

    /* Advertiser Video Intro */
    'advertiser-intro-video-modal': AdvertiserIntroVideoModal,
    /* Publisher Video Intro */
    'publisher-intro-video-modal': PublisherIntroVideoModal,

    /* Info */
    'common-info-modal': CommonInfoModal
  },

  mixins: [ clickaway ],

  data () {
    return {
      showModal: false,
      currentModal: null,
      args: {
        showCloseBtn: true
      }
    }
  },

  methods: {
    /*
       * Init
       * It's initiated on lifecycle hook created() - when app is created
       * */
    init () {
      var _this = this

      window.addEventListener('keyup', function (event) {
        if (event.keyCode === 27) {
          _this.onClose()
        }
      })
    },

    /*
       * On Show
       * @param {string} component A name of the modal component which you want to show
       * @param {object} args An object with arguments passed from injected modal components to main modal component,
       * can be a simple property or something else as an object as well
       * */
    onShow ([component, args]) {
      this.showModal = true
      this.currentModal = component
      if (args) {
        this.args = args
      }

      /* Emit body overflow to prevent scroll */
      vmessage.$emit('bodyOverflow')
    },

    /*
       * On Close
       * */
    onClose () {
      /* If modal is showed, emit body overflow to allow user to scroll again */
      if (this.showModal) {
        vmessage.$emit('bodyOverflow')
      }
      this.showModal = false
    }
  },

  /*
     * Lifecycle Hooks
     * */
  /* Created */
  created () {
    this.init()
  }
}
</script>
