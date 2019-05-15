<template lang="pug">
	.container
		.profile.flex.row.align-stretch
			img.avatar(:src="speakingList.avatar")
			
			.details.flex-item-1
				.name {{ speakingList.fullName }}
					span.text-muted.username ({{ speakingList.username }})

				.tags
					.tag.primary !Role name!
					.tag.danger !Administrator!
					.tag.success !Online!

				.description
					.info-row(v-if="speakingList.profile && speakingList.profile.location")
						i.fa.fa-map-marker
						span.caption Location:
						span.value {{ speakingList.profile.location }}

					.info-row
						i.fa.fa-clock-o
						span.caption Last login:
						span.value !Online!
					.info-row
						i.fa.fa-calendar
						span.caption Joined:
						span.value {{ speakingList.createdAt | ago }}							

				hr.full
		pre(v-html="this.$options.filters.prettyJSON(speakingList)")

</template>

<script>
	import Service from "../../core/service";

	import { mapGetters, mapActions } from "vuex";

	export default {
		computed: mapGetters("speaking", [
			"speakingList"
		]),

		methods: {
			...mapActions("speaking", [
				"getSpeakingList"
			])
		},

		created() {
			this.$service = new Service("profile", this); 
			
			// Get my profile
			this.getSpeakingList(); 
		}
	};

</script>

<style lang="scss" scoped>

	@import "../../../scss/themes/blurred/variables";
	@import "../../../scss/common/mixins";

	.container {
		padding: 1rem;
	}

	.profile {
		position: relative;
		$avatarSize: 6em;
		
		.avatar {
			width: $avatarSize;
			height: $avatarSize;
			border-radius: $avatarSize / 2;
			margin: 0.8em 2em 0 0;
			
		} // .avatar
		
		.details {
			// margin-bottom: 1em;
			
			.name {
				font-weight: 300;
				font-size: 2.5em;
				line-height: 1.3em;
				font-family: $fontFamilyHeader;

				.username {
					font-size: 0.7em;
					margin-left: 0.3em;
				}

			} // .name
			
			.tags {
				font-size: 1.1em; 
			}

			.description {
				margin-top: 0.6em;
				line-height: 1.3em;
				font-size: 0.9em;
				
				.info-row {
					font-size: 0.9em;
					line-height: 1.3em;
					
					i {
						width: 1.5em;
					}
					
					.caption {
						display: inline-block;
						width: 5em;
					}
					
					.value {
						margin-left: 0.5em;
						color: $textColor;
						font-weight: 400;
					}
					
				} // .info-row
				
			} // .description
			
		} // .details

	} // .profile

</style>