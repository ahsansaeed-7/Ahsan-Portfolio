import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Save data in Supabase
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message
        }
      ]);

    if (dbError) {
      console.error('Supabase Error:', dbError);

      return res.status(500).json({
        success: false,
        message: 'Failed to save message in database'
      });
    }

    // Send email to you
    const { error: mailError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'ahsanay048@gmail.com',
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (mailError) {
      console.error('Resend Error:', mailError);

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