exports.seed = function(knex, Promise){
  return knex('reviews').del()
  .then(()=>{
    return Promise.all([
      knex('reviews').insert({
        restaurantId: 1,
        userId:1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 2,
        userId: 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 3,
        userId: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 4,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 5,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 6,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 7,
        userId: 7,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 8,
        userId: 8,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 9,
        userId: 9,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 10,
        userId: 10,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 11,
        userId: 11,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 12,
        userId: 12,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 13,
        userId:13,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 14,
        userId:14,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 15,
        userId:15,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 16,
        userId:16,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 17,
        userId:17,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 18,
        userId:18,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 19,
        userId:19,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 20,
        userId:20,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus f9elis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 21,
        userId:21,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 22,
        userId:22,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 23,
        userId: 23,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId:24,
        userId:24,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 25,
        userId:25,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 26,
        userId:26,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 27,
        userId:27,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 28,
        userId:28,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 29,
        userId:29,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      }),
      knex('reviews').insert({
        restaurantId: 30,
        userId:30,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, nibh in aliquam rhoncus, justo nibh vestibulum metus, sed consectetur quam neque vel nisi. Sed faucibus, diam nec dictum consectetur, nisl tellus tincidunt massa, quis finibus magna mauris rhoncus felis. Vivamus et convallis odio. Nunc in vehicula nunc. Morbi in enim at quam pretium pretium in ac purus. In euismod purus a aliquet malesuada. Integer euismod, ligula at dignissim accumsan, augue lacus dignissim mi, sit amet sollicitudin nibh enim sed dui. Nam nec sagittis metus, posuere sagittis dui. Fusce venenatis nisl vitae condimentum suscipit. Suspendisse nec ipsum consectetur, dapibus lacus nec, pretium libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Cras accumsan blandit condimentum.',
        created_at: new Date
      })
    ])
  })
}
