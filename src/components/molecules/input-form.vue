<script setup lang="ts">
import { Field } from "vee-validate";
import { ElInput, ElFormItem } from "element-plus";
import type { LucideIcon } from "lucide-vue-next";

interface InputFormProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  showPassword?: boolean;
  append?: boolean;
  prepend?: boolean;
}

withDefaults(defineProps<InputFormProps>(), {
  type: "text",
  disabled: false,
  showPassword: false,
});
</script>

<template>
  <Field :name="name" v-slot="{ field, errorMessage, meta }">
    <el-form-item :label="label" :error="errorMessage" label-position="top"
      :validate-status="errorMessage ? 'error' : meta.valid ? 'success' : ''">
      <el-input :model-value="field.value" @update:model-value="field.onChange" @blur="field.onBlur" :type="type"
        :placeholder="placeholder" :disabled="disabled" :show-password="showPassword">
        <template v-if="prepend" #prepend>
          <slot name="prepend" />
        </template>

        <template v-if="append" #append>
          <slot name="append" />
        </template>
      </el-input>
    </el-form-item>
  </Field>
</template>
