import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';
import { RESEND_API_KEY } from 'astro:env/server';

export const server = {
	newsletter: defineAction({
		accept: 'form',
		input: z.object({
			email: z.string().email(),
		}),
		handler: async ({ email }) => {

			const resend = new Resend(RESEND_API_KEY);

			const test = await resend.contacts.create({
				email,
				unsubscribed: false,
				audienceId: '3926d5d9-219f-41f1-b106-61d494383ad0',
			});

			console.log(test.data, test.error)
		}
	})
}