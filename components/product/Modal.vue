<script setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { modalDisplay } = storeToRefs(useMainStore())
const props = defineProps({
    modalData: Object
})

const closeModal = () => {
    modalDisplay.value = false
}

</script>
<template>
    <TransitionRoot appear :show="modalDisplay" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                                Dodano do koszyka
                            </DialogTitle>
                            <div class="mt-2 my-8">
                                <p class="text-sm text-gray-500">
                                    {{ props.modalData.name }} {{ props.modalData.size }} x {{ props.modalData.quantity
                                    }}
                                </p>
                            </div>
                            <div class=" flex ">

                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    Kontynuuj zakupy
                                </button>

                                <nuxt-link to="/koszyk" @click="modalDisplay = false"
                                    class=" ml-auto inline-flex justify-center rounded-md border border-transparent bg-green-500 text-white px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                    Przejdź do koszyka
                                </nuxt-link>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>