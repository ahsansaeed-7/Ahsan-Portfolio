import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.https://jbuzxojfglakkrimwopk.supabase.co,
  process.env.sb_publishable_2ljWriOwTo90AoApVfRbqQ_f0pEF_gI
);

const resend = new Resend(process.env.re_HKJiqxb9_FgVqL6Xp8mpn9ZzstScu2YR1);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Save in Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);

    if (dbError) {
      console.error('Supabase Error:', dbError);
      return res.status(500).json({
        success: false,
        message: 'Failed to save message in database'
      });
    }

    // Send email
    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ahsanay048@gmail.com'],
      reply_to: email,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log("EMAIL RESPONSE:", emailResponse);

    if (emailResponse.error) {
      console.error('Resend Error:', emailResponse.error);
      return res.status(500).json({
        success: false,
        message: 'Saved in database but email failed'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong'
    });
  }
}