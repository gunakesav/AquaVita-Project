import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS Configuration
      // NOTE: User needs to replace these with their own EmailJS credentials
      const templateParams = {
        product_need: data.need,
        customer_name: data.name,
        customer_email: data.email,
        customer_phone: data.phone,
        message: data.message || 'No message provided',
        to_email: 'gunakesav.s@gmail.com',
        submitted_on: new Date().toLocaleString(),
      };

      // Replace with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      reset();
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="product-card-bubble p-8">
        <h2 className="text-3xl font-bold text-[#0077be] mb-6 text-center">
          Get Expert Consultation
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Product Need */}
          <div>
            <label className="block text-[#0077be] font-semibold mb-2">
              Need (Product Selection) <span className="text-red-500">*</span>
            </label>
            <select
              {...register('need', { required: 'Please select a product' })}
              className="glass-select w-full"
            >
              <option value="">Please enter the name of the product you need to consult</option>
              <option value="Water Purifier">Water Purifier</option>
              <option value="Water Softener">Water Softener</option>
              <option value="Both">Both</option>
              <option value="Not Sure">Not Sure</option>
            </select>
            {errors.need && (
              <p className="text-red-500 text-sm mt-1">{errors.need.message}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-[#0077be] font-semibold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Name can only contain letters and spaces',
                },
              })}
              placeholder="Your full name"
              className="glass-input w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#0077be] font-semibold mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="your.email@example.com"
              className="glass-input w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#0077be] font-semibold mb-2">
              Cell Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be 10 digits',
                },
              })}
              placeholder="+91 XXXXX XXXXX"
              className="glass-input w-full"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#0077be] font-semibold mb-2">
              Message <span className="text-gray-400 text-sm">(Optional)</span>
            </label>
            <textarea
              {...register('message', {
                maxLength: { value: 500, message: 'Message cannot exceed 500 characters' },
              })}
              placeholder="Tell us about your requirements (optional)"
              className="glass-textarea w-full"
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bubble-button flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0077be] border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Consultation Request
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 rounded-lg bg-green-100/80 backdrop-blur-sm border border-green-300"
            >
              <CheckCircle className="text-green-600" size={20} />
              <p className="text-green-700">
                Thank you! We'll contact you within 24 hours.
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 rounded-lg bg-red-100/80 backdrop-blur-sm border border-red-300"
            >
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-red-700">
                Something went wrong. Please try again or contact us directly.
              </p>
            </motion.div>
          )}
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Note: Please configure EmailJS credentials in{' '}
            <code className="bg-white/20 px-2 py-1 rounded">src/components/ConsultationForm.jsx</code>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultationForm;
