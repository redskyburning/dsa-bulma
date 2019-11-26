<template>
	<div class="home">
		<buefy-style-guide
			title="DSA Bulma"
			subtitle="Style Guide"
			:semantic-types="semanticTypes"
			:button-types="buttonTypes"
			:tag-types="tagTypes"
		/>
	</div>
</template>

<script>
export default {
	name      : 'style-guide',
	data() {
		return {
			semanticTypes: [
				'primary',
				'success',
				'info',
				'warning',
				'danger',
			],
			buttonTypes: [
				'default',
				'primary',
				'light',
				'dark',
				'text',
			],
			tagTypes: [
				'default',
				'primary',
				'light',
				'dark',
			],
		};
	},
};
</script>
