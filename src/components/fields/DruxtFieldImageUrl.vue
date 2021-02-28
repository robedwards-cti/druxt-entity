<template>
  <component
    :is="wrapper.component"
    v-if="!$fetchState.pending"
    v-bind="wrapper.props"
  >
    <!-- Label: Above -->
    <div v-if="$slots['label-above']">
      <slot name="label-above" />
    </div>

    <!-- Label: Inline -->
    <slot
      v-if="$slots['label-inline']"
      name="label-inline"
    />

    <!-- Items -->
    <!-- eslint-disable vue/no-v-html -->
    <span
      v-for="entity of entities"
      :key="entity.id"
      v-html="format(entity)"
    />
    <!-- eslint-enable vue/no-v-html -->
  </component>
</template>

<script>
import DruxtFieldFileDefault from './DruxtFieldFileDefault.vue'

/**
 * Image Url field.
 *
 * _This component is intended to be rendered by the `<druxt-field />` component._
 *
 * @see {@link DruxtField}
 *
 * @todo Add an example to Image field.
 */
export default {
  name: 'DruxtFieldImageUrl',

  /**
   * @extends DruxtFieldFileDefault
   * @see {@link DruxtFieldFileDefault}
   */
  extends: DruxtFieldFileDefault,

  methods: {
    /**
     * Formats the item output.
     *
     * @param {object} entity - The image entity.
     *
     * @return {string}
     */
    format: (entity) => (((entity.attributes || {}).uri || {}).url || null)
  }
}
</script>
