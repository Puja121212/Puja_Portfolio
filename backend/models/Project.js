import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  techStack: {
    type: [String],
    required: [true, 'Tech stack is required'],
    validate: {
      validator: function(techStack) {
        return techStack.length > 0;
      },
      message: 'Tech stack cannot be empty'
    }
  },
  githubLink: {
    type: String,
    required: [true, 'GitHub link is required'],
    validate: {
      validator: function(link) {
        return /^https?:\/\/(www\.)?github\.com\/.*/.test(link);
      },
      message: 'Please provide a valid GitHub URL'
    }
  },
  liveLink: {
    type: String,
    required: [true, 'Live demo link is required'],
    validate: {
      validator: function(link) {
        return /^https?:\/\/.*/.test(link);
      },
      message: 'Please provide a valid URL'
    }
  },
  image: {
    type: String,
    required: [true, 'Project image is required'],
    validate: {
      validator: function(image) {
        return /^https?:\/\/.*/.test(image);
      },
      message: 'Please provide a valid image URL'
    }
  },
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Fullstack', 'Mobile'],
    default: 'Fullstack'
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better search performance
projectSchema.index({ title: 'text', description: 'text' });

export default mongoose.model('Project', projectSchema);
