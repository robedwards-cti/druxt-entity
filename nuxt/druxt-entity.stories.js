import { default as DruxtEntity } from 'druxt-entity/src/components/DruxtEntity.vue'

export default {
  title: '<%= options.title %>',
  component: DruxtEntity,
  argTypes: {
    uuid: {
      control: {
        type: 'select',
        options: [<%= options.uuids.map((s) => `'${s}'`).join(', ') %>],
      },
    }
  },
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(args),
    template: '<DruxtEntity v-bind="$props" v-on="$props" />',
  }
}

<% for (mode of options.modes) { %>
export const <%= mode.charAt(0).toUpperCase() + mode.slice(1) %> = Template.bind({})
<%= mode.charAt(0).toUpperCase() + mode.slice(1) %>.args = {
  mode: '<%= mode %>',
  type: '<%= options.type %>',
  uuid: '<%= options.uuids[0] %>',
}
<%= mode.charAt(0).toUpperCase() + mode.slice(1) %>.storyName = '<%= mode %>'
<%= mode.charAt(0).toUpperCase() + mode.slice(1) %>.parameters = {
  docs: {
    source: {
      code: '<DruxtEntity\n  mode="<%= mode %>"\n  type="<%= options.type %>"\n  uuid="<%= options.uuids[0] %>"\n/>'
    }
  }
}

<% } %>
